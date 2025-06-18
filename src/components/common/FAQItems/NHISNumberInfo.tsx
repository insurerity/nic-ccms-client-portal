export default function NHISNumberInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        How to Find Your NHIS (Health Insurance) Number
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-800 ">
        <li>
          <strong>On your physical NHIS Membership Card</strong>
          <p>
            Look on the front of the card — just below your date of birth — it’s
            labeled with your 8-digit <em>NHIS Membership Number</em>.
          </p>
        </li>

        <li>
          <strong>On your NHIS renewal or registration slip</strong>
          <p>
            When you register or renew, the printed receipt lists your
            Membership Number beneath your personal details.
          </p>
        </li>

        <li>
          <strong>In the MyNHIS Mobile App</strong>
          <p>
            After logging in (using your name, date of birth, and NHIS or Ghana
            Card number), tap <em>“My Profile”</em> to view your NHIS Membership
            Number.
          </p>
        </li>

        <li>
          <strong>By USSD (if you recall your number)</strong>
          <p>
            Dial <code className="px-1 py-0.5 rounded">*929#</code>, select{" "}
            <strong>1. Check Policy Validity → NHIS Card</strong>, then enter
            and re-enter your Membership Number to confirm its status — this
            won’t display the number, but confirms that the number you entered
            is valid and ready for services.
          </p>
        </li>
      </ol>
    </div>
  );
}
