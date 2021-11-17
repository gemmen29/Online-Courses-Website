window.onload = (event) => {
  // load feature section
  let minInstructorIndex = 0;
  let maxInstructorIndex = 2;
  const ul = document.getElementById("speakers");
  const instructors = [
    {
      image: "assets/images/instructor1-dr.angelayu.jpg",
      name: "Dr. Angela Yu",
      info: "Lead instructor at the London App Brewery, London's leading Programming Bootcamp",
      detailedInfo:
        "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp",
    },
    {
      image: "assets/images/instructor2-pennydebyl.jpg",
      name: "Penny de Byl",
      info: "International Award Winning Professor & Best Selling Author",
      detailedInfo:
        "Hi, I'm Dr Penny de Byl.  I'm a full stack developer of most things computer sciency and academic with a true passion for teaching",
    },
    {
      image: "assets/images/instructor3-moshhamedani.jpg",
      name: "Mosh Hamedani",
      info: "Passionate Software Engineer and Best-selling Author",
      detailedInfo:
        "Hi! My name is Mosh (Moshfegh) Hamedani! I'm a passionate software engineer with two decades of experience and I've taught over 3 million people",
    },
    {
      image: "assets/images/instructor4-maximilianschwarzmüller.jpg",
      name: "Maximilian Schwarzmüller",
      info: "Professional Web Developer and Instructor",
      detailedInfo:
        "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages",
    },
    {
      image: "assets/images/instructor5-bentristem.jpg",
      name: "Ben Tristem",
      info: "GameDev.tv Founder :: Entrepreneur :: Passionate Teacher",
      detailedInfo:
        "Hi, I'm Ben. I have a degree in computing from Imperial College London, and a physics diploma from the Open University",
    },
    {
      image: "assets/images/instructor6-coltsteele.jpg",
      name: "Colt Steele",
      info: "Developer and Bootcamp Instructor",
      detailedInfo:
        "Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps",
    },
  ];
  function generateInstructors() {
    instructors.forEach((ins, ind) => {
      const li = document.createElement("li");
      li.classList.add(
        "speaker",
        "d-flex",
        "p-1",
        "align-items-center",
        "col-md-6",
        "p-md-2",
        "mt-4"
      );
      if (ind >= 2) {
        li.classList.add("d-none");
      }
      // Create Speaker Image div
      const divSpeakerImage = document.createElement("div");
      divSpeakerImage.classList.add(
        "col-5",
        "col-lg-auto",
        "ps-2",
        "speaker__image"
      );

      const speakerImage = document.createElement("img");
      speakerImage.src = ins.image;
      speakerImage.alt = `${ins.name} Icon`;

      divSpeakerImage.appendChild(speakerImage);
      // Create Info div
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("p-1");

      const speakerName = document.createElement("h3");
      speakerName.classList.add("speaker__name");
      speakerName.textContent = ins.name;
      const speakerInfo = document.createElement("p");
      speakerInfo.classList.add("red-color", "speaker__info");
      speakerInfo.textContent = ins.info;
      const speakerDetailedInfo = document.createElement("p");
      speakerDetailedInfo.classList.add("dark-gray", "mt-3", "speaker__detailed-info");
      speakerDetailedInfo.textContent = ins.detailedInfo;

      infoDiv.appendChild(speakerName);
      infoDiv.appendChild(speakerInfo);
      infoDiv.appendChild(speakerDetailedInfo);

      li.appendChild(divSpeakerImage);
      li.appendChild(infoDiv);

      ul.appendChild(li);
    });
  }
  generateInstructors();
  const allInstructorsList = document.getElementsByClassName("speaker");
  const moreSpeakers = document.getElementById("more-speakers-botton");
  moreSpeakers.addEventListener("click", () => {
    minInstructorIndex += 2;
    maxInstructorIndex += 2;
    for (
      let i = minInstructorIndex;
      i < maxInstructorIndex && i < allInstructorsList.length;
      i += 1
    ) {
      allInstructorsList[i].classList.remove("d-none");
      if (i === instructors.length - 1) {
        moreSpeakers.classList.add("d-none");
      }
    }
  });
};
