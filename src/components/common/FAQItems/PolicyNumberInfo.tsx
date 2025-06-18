export default function PolicyNumberInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        How to Find Your Insurance Policy Number
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-800">
        <li>
          <strong>Policy Certificate (Physical or PDF)</strong>
          <p>
            Look at the top or header of your policy document — whether it’s the
            hard-copy certificate or the PDF sent by email — where it’s labeled{" "}
            <em>“Policy No.”</em> or <em>“Policy Number.”</em>
          </p>
        </li>

        <li>
          <strong>Welcome Email or SMS</strong>
          <p>
            When you first bought your plan, your insurer emailed or texted you
            a welcome message that lists your policy details, including your
            policy number.
          </p>
        </li>

        <li>
          <strong>Premium Invoice or Renewal Notice</strong>
          <p>
            Check any billing statement or renewal reminder from your insurer —
            the policy number is always printed alongside your name and plan.
          </p>
        </li>

        <li>
          <strong>Agent or Customer‑Care Hotline</strong>
          <p>
            If you can’t find any documents, call your insurer’s helpline or
            contact your insurance agent; they can quickly look up and confirm
            your policy number for you.
          </p>
        </li>
      </ol>
    </div>
  );
}
