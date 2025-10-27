import "./FAQ.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
export const FAQ = () => {
  const navigate = useNavigate();

  const defaultFaqs = [
    {
      question: "What is McLookup?",
      answer:
        "McLookup is a website similar to capes.me or NameMC that allows users to view Minecraft player information such as skins, UUIDs, and available capes.",
    },
    {
      question: "Where does McLookup get cape data from?",
      answer:
        "McLookup uses the Capes.me API to display multiple capes for a player. It retrieves the data directly from Capes.me and the official Minecraft API.",
    },
    {
      question: "Why do some players not have all their capes listed?",
      answer:
        "Not every cape a player owns may appear. This can happen if the player never wore the cape while Capes.me was tracking it or if the cape was not valuable enough to be stored in the Capes.me database.",
    },
    {
      question: "Does McLookup show all Minecraft capes?",
      answer:
        "Yes. McLookup provides a list of all known Minecraft capes. Clicking on a cape shows more detailed information in a popup, including its title and description.",
    },
    {
      question: "Who created McLookup?",
      answer:
        "McLookup was created by a developer named McDevYT. It is a personal hobby project and is still being improved.",
    },
    {
      question: "Is McDevYT responsible for player content shown on McLookup?",
      answer:
        "No. McDevYT does not take responsibility for the skins, names, or capes displayed on the website. These belong to the players and are shown for informational purposes only.",
    },
    {
      question: "What should I do if I find an issue or incorrect data?",
      answer:
        "If you find a problem with the data or functionality, you can contact McDevYT using the contact tab on the website.",
    },
    {
      question: "Is McLookup an official Minecraft website?",
      answer:
        "No. McLookup is not affiliated with Mojang or Microsoft. It is an independent fan-made project that uses publicly available APIs.",
    },
    {
      question: "Can I suggest new features or improvements?",
      answer:
        "Yes. McDevYT welcomes feedback and suggestions for improving McLookup. You can reach out through the contact tab to share ideas or bug reports.",
    },
    {
      question: "Why was McLookup created?",
      answer:
        "McLookup was made as a fun and useful side project to make it easier for players to explore Minecraft skins and capes in one place.",
    },
  ];

  return (
    <div className="faq">
      <div className="faq-main">
        <Searchbar
          isSticky={true}
          value=""
          onSearch={(value) => void navigate(`/search/${value}`)}
        />
      </div>
      <div className="faq-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="faq-content">
          <table cellPadding="8" cellSpacing="0">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {defaultFaqs.map((faq, index) => (
                <tr key={index}>
                  <td>{faq.question}</td>
                  <td>{faq.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
