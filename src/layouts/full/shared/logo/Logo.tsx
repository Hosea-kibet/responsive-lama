import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
    display: "block",
    fontSize: "25px",
    padding: "10px",
    textDecoration: "none",
    color: "#89C545"
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      {/* <Image src="/images/logos/dark-logo.svg" alt="logo" height={70} width={174} priority /> */}
      <div className="text-3xl font-bold text-[#89C545]">
      <span className="uppercase">SKY</span>
      <span className="lowercase">media</span>
    </div>
    </LinkStyled>
  );
};

export default Logo;
