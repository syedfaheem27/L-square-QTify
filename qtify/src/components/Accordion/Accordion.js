import { createContext, useContext } from "react";
import styles from "./Accordion.module.css";

const AccordionContext = createContext();

const Accordion = ({ children, opens, setOpens }) => {
  return (
    <AccordionContext.Provider
      value={{
        opens,
        setOpens,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

const Header = ({ open, text }) => {
  const { opens, setOpens } = useContext(AccordionContext);

  const toggleOpenHandle = () =>
    setOpens((prevOpen) => (prevOpen === open ? null : open));
  return (
    <div className={styles.header}>
      <span>{text}</span>
      <button onClick={toggleOpenHandle} style={{ cursor: "pointer" }}>
        {opens === open ? ">" : "<"}
      </button>
    </div>
  );
};

const Body = ({ children, open }) => {
  const { opens } = useContext(AccordionContext);

  if (opens !== open) return null;

  return <div className={styles.body}>{children}</div>;
};

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
