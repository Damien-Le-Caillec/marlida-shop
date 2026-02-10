const Footer = () => {
  return (
    <footer style={{background: 'var(--color-dark)', color: 'var(--color-cream)', padding: '40px 0', marginTop: '50px'}}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h4>Marlida</h4>
          <p>Paris</p>
        </div>
        <div>
          <h4>Aide</h4>
          <ul style={{listStyle: 'none', fontSize: '12px'}}>
            <li>Contact</li>
            <li>Retours</li>
          </ul>
        </div>
        <div>
          <h4>Légal</h4>
          <ul style={{listStyle: 'none', fontSize: '12px'}}>
            <li>CGV</li>
            <li>Mentions Légales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;