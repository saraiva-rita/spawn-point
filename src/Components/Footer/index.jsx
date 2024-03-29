import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footerPage bg-dark">
      <div className="social">
        <ul>
          <li>
            <Link
              to="https://www.youtube.com/channel/UCUVlPhTLG6046c23rjF3J7A"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/SpawnPoint9000" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://discord.com/invite/HkxsurrRSb" target="_blank">
              <i className="fab fa-discord fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/spawnpoint9000/"
              target="_blank"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://spawnpoint.itch.io/" target="_blank">
              <i className="fa-brands fa-itch-io fa-2x"></i>
            </Link>
          </li>
        </ul>
        <br />
        <div className="email">
          <i className="fa-regular fa-envelope"></i>
          <p>info@spawnpoint.pt</p>
        </div>
      </div>
      <Link to="https://www.startuplisboa.com/" target="_blank">
        <img className="startUp" src="/images/startUp-Lx.jpg" alt="" />
      </Link>
    </div>
  );
}
export default Footer;
