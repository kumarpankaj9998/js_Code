import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Sidebar({ openForm, selected }) {
  const [general, setGeneral] = useState(false);
  const [createNft, setCreateNFT] = useState(true);
  const [advance, setAdvance] = useState(false);
  const [seo, setSeo] = useState(false);
  const [appearance, setAppearance] = useState(false);
  const [team, setTeam] = useState(false);

  let navigate = new useNavigate();
  function openPage(prop) {
    openForm(prop);
    navigate("?tab=" + prop);
  }

  function handleTabs(props) {
    if (props === "general") {
      setGeneral(!general);
    }
    if (props === "createNft") {
      setCreateNFT(!createNft);
    }
    if (props === "advance") {
      setAdvance(!advance);
    }
    if (props === "seo") {
      setSeo(!seo);
    }
    if (props === "appearance") {
      setAppearance(!appearance);
    }
    if (props === "team") {
      setTeam(!team);
    }
  }
  return (
    <div className="w-0 h-100 ">
         <p className="fs-4 ps-4 pt-4" onClick={() => handleTabs("createNft")}>
        <a
          data-bs-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample1"
          style={{textDecoration:"none"}}
        >
          Create {createNft ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </a>
      </p>
      <div class="collapse show" id="collapseExample1">
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("createNft")}
        >
          <span className={selected === "createNft" ? "color-blue" : null}>
            Create new NFT
          </span>
        </div>
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("addCollections")}
        >
          <span className={selected === "addCollections" ? "color-blue" : null}>
            Add Collections
          </span>
        </div>
      </div>
      <p className="fs-4 ps-4 pt-4" onClick={() => handleTabs("general")}>
        <a
          data-bs-toggle="collapse"
          href="#collapseExample2"
          role="button"
          aria-expanded="true"
          aria-controls="collapseExample2"
          style={{textDecoration:"none"}}
        >
          General {general ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </a>
      </p>
      <div class="collapse" id="collapseExample2">
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("nameLogo")}
        >
          <span className={selected === "nameLogo" ? "color-blue" : null}>
            Name and Logo
          </span>
        </div>
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("contactUs")}
        >
          {" "}
          <span className={selected === "contactUs" ? "color-blue" : null}>
            Contact Us
          </span>
        </div>
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("aboutUs")}
        >
          <span className={selected === "aboutUs" ? "color-blue" : null}>
            About Us
          </span>
        </div>
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("socialLinks")}
        >
          <span className={selected === "socialLinks" ? "color-blue" : null}>
            Social Links
          </span>
        </div>
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("addCategories")}
        >
          <span className={selected === "addCategories" ? "color-blue" : null}>
            Add Categories
          </span>
        </div>
      </div>

     
      <p className="fs-4 ps-4 pt-4" onClick={() => handleTabs("advance")}>
        <a
          data-bs-toggle="collapse"
          href="#collapseExample3"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample3"
          style={{textDecoration:"none"}}
        >
          Advance {advance ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </a>
      </p>
      <div class="collapse" id="collapseExample3">
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("siteUrl")}
        >
          <span className={selected === "siteUrl" ? "color-blue" : null}>
            Site Urls
          </span>
        </div>
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("customerPages")}
        >
          <span className={selected === "customerPages" ? "color-blue" : null}>
            Customer Store Pages
          </span>
        </div>
      </div>

      <p className="fs-4 ps-4 pt-4" onClick={() => handleTabs("seo")}>
        <a
          data-bs-toggle="collapse"
          href="#collapseExample4"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample4"
          style={{textDecoration:"none"}}
        >
          SEO {seo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </a>
      </p>

      <div class="collapse" id="collapseExample4">
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("seo")}
        >
          <span className={selected === "seo" ? "color-blue" : null}>
            Seo Settings
          </span>
        </div>
      </div>
      <p className="fs-4 ps-4 pt-4" onClick={() => handleTabs("appearance")}>
        <a
          data-bs-toggle="collapse"
          href="#collapseExample5"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample5"
          style={{textDecoration:"none"}}
        >
          Appearance {appearance ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </a>
      </p>

      <div class="collapse" id="collapseExample5">
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("appearance")}
        >
          <span className={selected === "appearance" ? "color-blue" : null}>
            Appearance Settings
          </span>
        </div>
      </div>
      <p className="fs-4 ps-4 pt-4" onClick={() => handleTabs("team")}>
        <a
          data-bs-toggle="collapse"
          href="#collapseExample6"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample6"
          style={{textDecoration:"none"}}
        >
          Team {team ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </a>
      </p>

      <div class="collapse" id="collapseExample6">
        <div
          className="fs-6 ps-5 pb-2 cursor-pointer"
          onClick={() => openPage("team")}
        >
          <span className={selected === "team" ? "color-blue" : null}>
            Team Settings
          </span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
