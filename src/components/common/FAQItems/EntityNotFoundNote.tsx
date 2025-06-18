export default function EntityNotFoundNote() {
  return (
    <div className="p-4 ">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Can’t Find Your Insurer?
      </h3>
      <p className="text-gray-800">
        Not finding your insurer in the <strong>“Entities of Concern”</strong>{" "}
        list simply means that, to date:
      </p>
      <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
        <li>
          They may have <strong>merged</strong> or <strong>rebranded</strong>{" "}
          under a different corporate name, so the old name no longer appears.
        </li>
        <li>
          If so, click the <strong>“Can’t find your Entity of Concern?”</strong>{" "}
          link below the Entity of Concern text box to view more details.
        </li>
      </ul>
    </div>
  );
}
