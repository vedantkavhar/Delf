import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter, SiLeetcode, SiCodechef } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
  Leetcode_Link,
  CodeChef_Link,
} from "../utils/constants.js";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props);
    // console.log("SocialProfileClass child constructor");
  }

  async componentDidMount() {
    // console.log("SocialProfileClass child componentDidMount");
  }

  componentDidUpdate() {
    // console.log("SocialProfileClass child componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("SocialProfileClass child componentWillUnmount");
  }

  render() {
    // console.log("SocialProfileClass child render");
    return (
      <div className="social-media-container">
        <a
          href={Linkedin_Link}
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>
        <a href={Github_Link} className="icon-button github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
        {/* <a href={Leetcode_Link} className="icon-button leetcode" target="_blank">
          <i>
            <SiLeetcode />
          </i>
        </a>
        <a href={CodeChef_Link} className="icon-button codechef" target="_blank">
          <i>
            <SiCodechef />
          </i>
        </a> */}
        <a href={Email_Link} className="icon-button email">
          <i>
            <SiGmail />
          </i>
        </a>
        <a href={Twitter_Link} className="icon-button twitter" target="_blank">
          <i>
            <SiTwitter />
          </i>
        </a>
        
        
      </div>
    );
  }
}

export default SocialProfileClass;