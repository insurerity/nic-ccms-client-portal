import React from "react";

export default function VoterIDInfo() {
  return (
    <div className=" space-y-6">
      <h2 className="text-base font-bold text-gray-900 ">
        How to Find Your Voter ID Number
      </h2>

      <ol className="space-y-4 list-decimal list-inside text-gray-800 ">
        <li>
          <strong>On your physical Voter ID card</strong>
          <p>
            Look on the front of the card, usually near your photo or above the
            barcode where it’s clearly labeled <em>“Voter’s ID Number.”</em>
          </p>
        </li>

        <li>
          <strong>On your temporary registration slip</strong>
          <p>
            When you first registered, you were given a slip showing your name,
            polling station, and Voter ID Number.
          </p>
        </li>

        <li>
          <strong>Online via the EC portal</strong>
          <p>
            Visit{" "}
            <a
              href="https://registers.ec.gov.gh"
              className="text-blue-600 underline hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://registers.ec.gov.gh
            </a>{" "}
            and follow the prompts—once you enter your personal details, you’ll
            see your Voter ID Number displayed.
          </p>
        </li>

        <li>
          <strong>At any Electoral Commission office</strong>
          <p>
            If you’ve lost both the card and slip, go to your local EC office
            with a valid ID (e.g., Ghana Card), and they can look up and reprint
            your Voter ID Number.
          </p>
        </li>
      </ol>
    </div>
  );
}
