const SocialMediaButton = (props: any) => {
  const google = require("../assets/google.png");
  const facebook = require("../assets/facebook.png");

  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
    >
      <img
        className="pr-1.5"
        src={props.label === "Google" ? google : facebook}
        alt=""
        width="25"
        height="25"
      />
      <span>{props.label}</span>
    </button>
  );
};

export default SocialMediaButton;
