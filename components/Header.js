import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>Keep Up To Date</p>
      <style jsx>{`
        .title {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Header;
