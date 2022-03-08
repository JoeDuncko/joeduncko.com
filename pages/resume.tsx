import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React from "react";
import Contact from "../components/contact";
import Education from "../components/education";
import Experiences from "../components/experiences";
import Interests from "../components/interests";
import Layout, { siteTitle } from "../components/layout";
import Memberships from "../components/memberships";
import Projects from "../components/projects";
import Socials from "../components/socials";
import { socials } from "../data/socials";

export default function Resume() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Wrapper that sets print width for whole resume */}
      <div className="print:min-w-[960px]">
        {/* TODO: move this to its own component */}
        <div className="mb-4 hidden justify-between print:flex text-sm">
          <div>
            <h1 className="text-4xl">Joe Duncko</h1>
          </div>
          <div>
            <div className="text-right">
              personal@JoeDuncko.com | (330) 719 - 1223 | JoeDuncko.com
            </div>
            <div className="text-right">
              {socials.map((social, i, array) => (
                <React.Fragment key={social.name}>
                  <FontAwesomeIcon icon={social.icon} />{" "}
                  {social.printFriendlyLabel}
                  {i !== array.length - 1 && " | "}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row print:flex-row md:gap-8 print:gap-8">
          <div className="flex-1">
            <Experiences />
          </div>
          <div className="flex-1">
            <Education />
            <Memberships />
            <Projects />
            <Interests />
            <Socials className="print:hidden" />
            <Contact className="print:hidden" />
          </div>
        </div>
      </div>
    </Layout>
  );
}