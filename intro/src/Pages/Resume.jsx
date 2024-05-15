import React from 'react'
import Navbar from '../Components/Navbar'
import Whatsappbutton from '../Components/Whatsappbutton';

const Resume = () => {
     const resumeLink =
       "https://docs.google.com/document/d/18fQoPVZgXqxZvbdI6RLEyMuikLDxBJVtwuUn9mI57UA/edit?usp=sharing";
  return (
    <>
      <Navbar />
      <div className="">
        <iframe
          title="Resume"
          src={resumeLink}
          width="100%"
          height="800px"
          className="border-none"
        />
      </div>
      <Whatsappbutton/>
    </>
  );
}

export default Resume