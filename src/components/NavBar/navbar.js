import Image from "next/image";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="navLayout flex justify-between items-center w-9/10 my-4 mx-auto px-3 py-2 rounded-xl shadow cursor-pointer max-w-250 bg-white">
        <Image
          src="/images/logo.svg"
          alt="ExtensionHub Logo"
          width="150"
          height="10"
        ></Image>
        <span className="w-9 flex justify-center items-center rounded-md bg-(--neutral-100) self-stretch cursor-pointer">
          <Image
            src="/images/icon-moon.svg"
            alt="ExtensionHub Logo"
            width="16"
            height="16"
          ></Image>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
