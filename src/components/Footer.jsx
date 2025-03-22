const Footer = () => {
  return (
    <footer className="footer mt-auto  sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ByteBlaze
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
