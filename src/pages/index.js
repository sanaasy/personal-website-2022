import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// Components
import Header from "../components/Header";
import Work from "../components/Work";
// import Experience from "../components/Experience";
import About from "../components/about";
import Skills from "../components/skills";
// import Promotion from "../components/Promotion";
import Footer from "../components/Footer";

const IndexPage = () => (
	<Layout>
		<SEO title="Sanaa Syed" />
		<Header></Header>
		{/* <hr /> */}
		{/* <Promotion></Promotion> */}
		{/* <Work></Work> */}
		{/* <Experience></Experience> */}
		{/* <Skills></Skills>
		<About></About>
		<Footer></Footer> */}
	</Layout>
);

export default IndexPage;
