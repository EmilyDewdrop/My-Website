

document.getElementById("canada").addEventListener("click", explainTextCan);

function explainTextCan() {
    document.getElementById("infoTest").innerHTML = "I was born and raised near Edmonton, Alberta, Canada, where for a good chunk of the year there is snow as far as you can see. I moved to the UK in 2011, and recently became a British Citizen.";
  }

document.getElementById("autism").addEventListener("click", explainTextaut);

function explainTextaut() {
    document.getElementById("infoTest").innerHTML = "In December 2019, I went through the formal process of getting a diagnosis of autism (after having my suspicions for year). Since then I've completely embraced being autistic, and started to really explore my autistic tendancies. One of these is my tendancy to hyperfocus and stim when I'm doing something I really enjoy, and I've noticed I do a lot of both of those when coding.";
  }

  document.getElementById("parliament").addEventListener("click", explainTextPar);

  function explainTextPar() {
      document.getElementById("infoTest").innerHTML = "One of my favourite ever jobs was with the Education department at The Houses of Parliament. Every day for two years I would take school groups from around the country on tours and introduce them to how Parliamentary democracy worked. Though I left for a myriad of reasons, including low pay and feeling restricted by online impartiality requirements, I considered the role a great honour.";
    }

    document.getElementById("busTrip").addEventListener("click", explainTextBus);

    function explainTextBus() {
        document.getElementById("infoTest").innerHTML = "For my birthday in February, I decided to take advantage of the teporary £2 fare cap on buses in England and achieve a long-time goal of making a journey from London to Edinburgh via local buses. When I sent out a tweet about this to my 800 followers, I wasn't expecting much of a response, but within 24 hours I had gained 20,000 new followers. I appeared in national and international media, have appeared at bus industry events, and even got a literary agent out of the experience!";
    }
      
    document.getElementById("betterWorld").addEventListener("click", explainTextBetter);

    function explainTextBetter() {
        document.getElementById("infoTest").innerHTML = "Saying I want to create tech for a better world sounds cliché, but I recently took part in Freedom From Torture's Campiagn Leadership Programme and the group had so many great ideas, but a lot of them required technical skills I just didn't have. I also work for an advocacy charity, and not-fit-for-purpose technology really holds back the work advocates do. I often feel helpless in the face of so many major crises in the world, and I'm inspired by apps like Olio or StreetLink that make a tangible difference.";
    }
      
    document.getElementById("learnMore").addEventListener("click", explainTextMore);

    function explainTextMore() {
        document.getElementById("infoTest").innerHTML = "Scroll down to see the gallery I created to highlight the other projects in my Founders and Coders application. Click the images for the github repositories (or the code wars website). Links to the deployed sites can be found in the text.";
    }



    function clickBlind(obj) {
     if (obj.innerText == "Click here to learn more about me!") {obj.innerText = "I grew up on the Canadian Prairies";
        return;
       }
      if (obj.innerText == "I grew up on the Canadian Prairies") {obj.innerText = "I was diagnoised with autism in 2019";
       return;
      }
      if (obj.innerText == "I was diagnoised with autism in 2019") {obj.innerText = "I worked in the Houses of Parliament";
      return;
     }
     if (obj.innerText == "I worked in the Houses of Parliament") {obj.innerText = "I went viral for riding buses in February!";
     return;
     }
     if (obj.innerText == "I went viral for riding buses in February!") {obj.innerText = "I really want to create tech for a better world";
     return;
     }
     if (obj.innerText == "I really want to create tech for a better world") {obj.innerText = "Alight now and explore more!";
     return;
     }
     if (obj.innerText == "Alight now and explore more!") {obj.innerText = "Click here to learn more about me!";
     return;
     }
     }

     function toggleText1() {
        var text = document.getElementById("hobbyText");
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }
    
      function toggleText2() {
        var text = document.getElementById("movieText");
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }
    
      function toggleText3() {
        var text = document.getElementById("websiteText");
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }
    
      function toggleText4() {
        var text = document.getElementById("gameText");
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }