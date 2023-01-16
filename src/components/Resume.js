import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiBulma } from "react-icons/si";

function Resume() {
  return (
    <section id="resume" className="download-intro">
      <h1 class="resumeTitle">Download My Resume</h1>
      <a href="https://docs.google.com/document/d/1LqgRFM55br11RAfMzBgzlbVBL2FcuS__eJBJYD2px7w/edit" className="download-logo" size="10x" download>
        <BsCloudDownload />
      </a>
      
      <p className="icons"><TiHtml5 /><DiCss3 /><TbBrandJavascript /><DiNodejs /><SiHandlebarsdotjs /> <SiExpress /><FaBootstrap /><SiSequelize /><SiJquery /><SiBulma /></p>
    </section>
  );
}

export default Resume;