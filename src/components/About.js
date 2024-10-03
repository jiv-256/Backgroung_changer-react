import React from 'react'
// import PropType from 'prop-types'
export default function About(props) {
  return (
    <div className="container " style={{color: props.Mode==='dark'?'white':'black'}}>
        <h3>About Us</h3>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item " >
    <h2 class="accordion-header">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Mission and Purpose
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show " data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor: props.Mode==='light'?'white':'#042743'}}>
        <strong>Our mission is to empower writers of all levels by providing an intuitive, reliable, and efficient platform that simplifies the editing process.</strong>We aim to enhance the clarity, accuracy, and professionalism of written content, helping users express their ideas with confidence.
        <br/>
        <br/>
        At the core of our platform is the desire to make high-quality text editing accessible to everyone. Whether you're a student, a professional, or a casual writer, our tools are designed to streamline the editing process, offering advanced features like grammar correction, style improvement, and readability enhancements. We believe that clear communication is key to success, and our purpose is to support you in achieving that through seamless, user-friendly editing solutions.
      </div>
    </div>
  </div>
  <div class="accordion-item ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Key Features & Tools
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        
      <div class="accordion-body " style={{backgroundColor: props.Mode==='light'?'white':'#042743' }} >
        <strong> The editor on our website is an easy to use tool for text editing online that doesn’t make its users go through or follow any intricate procedures for editing their text files.</strong> You don’t need to learn the editing features provided on this tool as they are similar to the ones you might already have used on the text editing programs like MS Word. The simple steps you have to follow for using this text editor online are discussed below.
        <br/>
        <br/>
          1. Copy-paste your text in the box provided on this tool or upload the text file by browsing it from your device.You can also upload the file saved in Google Drive or Dropbox directly on this tool.

        <br/>
        <br/>
          2.Use the editing toolkit to format the file as per your requirements.
        <br/>
        <br/>
          
          3.After completing the editing process, you can save the edited file on your device with a single click on this tool.
      </div>
          
    </div>
  </div>
  <div class="accordion-item ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        User-Friendly Experience
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor: props.Mode==='light'?'white':'#042743'}}>
        <strong>At WordForge, we believe that editing should be effortless and enjoyable.</strong>  Our platform is designed with simplicity in mind, ensuring that whether you're refining a short essay or polishing a professional document, you can do so with ease. With an intuitive interface and streamlined tools, you can focus on your writing, while we take care of the rest.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
