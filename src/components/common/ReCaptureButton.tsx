
'use client';

import { useRef, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaButtonProps {
  onSubmit?: (token: string) => Promise<void>;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  redirectTo?: string;
}

export default function RecaptchaButton({
  onSubmit,
  children = 'Submit',
  className = '',
  disabled = false,
  loading = false,
  redirectTo
}: RecaptchaButtonProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setError('');
    
    const token = recaptchaRef.current?.getValue();
    
    if (!token) {
      setError('Please complete the reCAPTCHA');
      return;
    }

    setIsLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(token);
      }
      
      recaptchaRef.current?.reset();
      
      if (redirectTo) {
        router.push(redirectTo);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = disabled || isLoading || loading;

  return (
    <div className="space-y-3 w-full">
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        />
      </div>

      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={className}
      >
        {isLoading || loading ? 'Processing...' : children}
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}
