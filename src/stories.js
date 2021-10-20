const stories = [
  {
    title: "Babbit and friends",
    image: require("../assets/images/stories/BabbitFriends.png"),
    content:
      "Welcome time travellers! My name is Babbit and I’ll be travelling through time with my special friends! Join us on our adventures.\n\n" +
      "Owl’s name is Charlie and he helps Babbit make wise time travelling choices and keeps Babbit informed.\n\n" +
      "Alongside Babbit and owl are their friends Lilly the busy Bee who keeps time travellers alert during dangerous periods of history, and Phoebe the ladybird, who somehow always ends up getting into lots of time travelling trouble! Be careful time incredible travellers!\n\n",
    author: {
      name: "Babbit",
      image: require("../assets/images/authors/BabbitHead.png"),
    },
    readTime: 1,
    id: "1",
    category: "20th Century",
    accent: "orange",
  },
  {
    title: "Walk like an Egyptian",
    image: require("../assets/images/stories/Egypt.jpg"),
    author: {
      name: "Cleopatra",
      image: require("../assets/images/authors/CleopatraHead.png"),
    },
    category: "69BC",
    readTime: 3,
    content:
      "Cleopatra was the Queen of Ancient Egypt and is still one of the most famous women in world history.\n\n" +
      "She was the last of the Pharaohs set up in Egypt by Alexander the Great and was a Macedonian Princess by decent.\n\n" +
      "When Cleopatra died, Egypt became the Roman province of Aegyptus. Keep reading for more facts about the famous Egyptian queen.\n\n" +
      "Cleopatra’s full name was Cleopatra VII Philopator. She was born on Alexandria, Egypt in the year 69 BC.\n\n" +
      "She was the last active Pharaoh of the Ancient Egyptian Empire. Cleopatra reigned of the kingdom for 21 years, from 51 BC until her death in 30 BC.\n\n" +
      "Cleopatra had a relationship with Roman ruler Julius Caesar. Nine months after they first met, in 47 BC, she gave birth to a son. His name was Ptolemy Caesar and he was known as Caesarion, meaning little Caesar.\n\n" +
      "One common and well told story about Queen Cleopatra was that she took baths in donkey milk to preserve her beauty. In fact, myth and legend says that nearly 700 donkeys were used to provide enough milk for her daily bath!",
    accent: "blue",
    id: "2",
  },
  {
    title: "Hooray for Shakespeare!",
    author: {
      name: "William",
      image: require("../assets/images/authors/ShakespeareHead.png"),
    },
    content:
      "Very little is known about William Shakespeare's childhood. He was born in the English city of Stratford-upon-Avon about 100 miles northwest of London in 1564. William's father was a successful leather merchant who once held the public position of alderman. \n\n He was the third of six children including two older sisters and three younger brothers." +
      "Growing up in Stratford-upon-Avon William lived in a house with his big family on Henley Street. He went to the local grammar school where he learned about poetry, history, Greek, and Latin.\n\n" +
      "When William turned eighteen he married Anne Hathaway. Anne was eight years older than William. They soon had a family including a daughter named Susanna and twins named Hamnet and Judith.\n\n" +
      "Shakespeare also became famous for his poetry. His most famous poem of the time was Venus and Adonis. He also wrote poems called sonnets. A book of 154 of Shakespeare's sonnets was published in 1609. \n\n" +
      "Shakespeare is considered by many to be the greatest writer of the English language. He is also one of the most influential. Through his works, he is credited with introducing nearly 3,000 words to the English language. In addition, his works are the second most often quoted after the Bible.",
    accent: "gold",
    readTime: 5,
    image: require("../assets/images/stories/ShakespeareBackground.png"),
    category: "16th Century",
    id: "3",
  },
  {
    title: "Let's fly with Leonardo",
    image: require("../assets/images/stories/LeonardoHelicopter.png"),
    author: {
      name: "Leonardo",
      image: require("../assets/images/authors/Leonardo.png"),
    },
    content:
      "Leonardo da Vinci was an artist, scientist, and inventor during the Italian Renaissance. He is considered by many to be one of the most talented and intelligent people of all time. The term Renaissance Man (someone who does many things very well) was coined from Leonardo's many talents and is today used to describe people who resemble da Vinci. \n\n" +
      "Leonardo was born in the town of Vinci, Italy on April 15, 1452. Not much is known about his childhood other than his father was wealthy and had a number of wives. About the age of 14 he became an apprentice to a famous artist named Verrocchio. This is where he learned about art, drawing, painting and more. \n\n" +
      "Leonardo da Vinci is regarded as one of the greatest artists in history. Leonardo excelled in many areas including drawing, painting, and sculpture. Although we don't have a lot of his paintings today, he is probably most famous for his paintings and also gained great fame during his own time due to his paintings. Two of his most famous paintings, and perhaps two of the most famous in the world, include the Mona Lisa and The Last Supper. \n\n" +
      "Many of da Vinci's drawings and journals were made in his pursuit of scientific knowledge and inventions. His journals were filled with over 13,000 pages of his observations of the world. He drew pictures and designs of hang gliders, helicopters, war machines, musical instruments, various pumps, and more. He was interested in civil engineering projects and designed a single span bridge, a way to divert the Arno River, and movable barricades which would help protect a city in the case of attack.",
    id: "4",
    readTime: 5,
    category: "16th Century",
    accent: "#D10074",
  },
  {
    title: "The Internet Age",
    image: require("../assets/images/stories/InternetPic.png"),
    content:
      "The Internet or The World Wide Web is a network that connects millions of computers worldwide. It was one of the greatest inventions of the 20th Century.\n\n" +
      "Since its beginning, the Internet has changed a great deal. Advances in technology have made using the Internet quicker and easier.\n\n" +
      "Security and privacy concerns have always been a problem on the Internet with many people often unaware of the potential dangerous risks.\n\n" +
      "As well as the World Wide Web, the Internet is used for such applications as email, file sharing, online chat, phone and video calls, online gaming and more.\n\n" +
      "English physicist Sir Tim Berners-Lee is regarded as having invented the World Wide Web in 1989. Since then he has continued the development of web standards and other web related projects.\n\n",
    author: {
      name: "Tim",
      image: require("../assets/images/authors/Berners.png"),
    },
    readTime: 4,
    id: "5",
    category: "20th Century",
    accent: "green",
  },
];

export default stories;
