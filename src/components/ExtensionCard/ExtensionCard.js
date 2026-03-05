import Image from "next/image";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

const ExtensionCard = ({ extension, onToggle, onRemove }) => {
  if (!extension) return null;
  const { logo, name, description, isActive } = extension;

  return (
    <div className="flex flex-col items-center justify-between bg-white py-3 px-3.5 rounded-xl shadow my-1 w-1/1 max-w-80 min-h-40">
      <div className="flex items-start">
        <Image src={logo} alt={`${name} logo`} width={40} height={40} />
        <div className="ml-3">
          <h3 className="font-bold text-lg text-(--neutral-900) mb-2 leading-none">
            {name}
          </h3>
          <p className="text-sm text-gray w-8.5/10">{description}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 justify-between w-1/1">
        <button
          onClick={() => onRemove && onRemove()}
          className={`px-2.5 py-1 rounded-full text-sm font-medium bg-white text-(--neutral-900) border border-gray-400`}
        >
          Remove
        </button>
        <button
          onClick={() => onToggle && onToggle()}
          className={isActive ? "text-gray-500" : "text-red-700"}
        >
          {isActive ? (
            <PiToggleLeftFill className="text-3xl cursor-pointer" />
          ) : (
            <PiToggleRightFill className="text-3xl cursor-pointer" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ExtensionCard;
