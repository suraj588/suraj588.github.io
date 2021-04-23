import React from "react";
import styles from "./Project.module.css"
import TechUsed from "./TechUsed";
import {ImGithub} from "react-icons/im";

const Project = ({project}) => {
    return (
        <div className={styles.cover}>
            <div className={styles.imgCover}>
                <img src={project.img_url} alt={project.alt}/>
            </div>
            <div className={styles.details}>
                <div>{project.name}</div>
                <div>{project.desc}</div>
                <TechUsed techUsed={project.tech_stack}/>
                <div>
                    <div>
                        <a href={project.github_link}>
                        <ImGithub style={{color:"black",fontSize:"60px"}}/>
                        </a>
                    </div>
                    <div>
                        <a href={project.medium_link}>
                            <img src="Medium.png" alt="medium"/>
                        </a>
                    </div>
                    <div>
                        <a href={project.live}>
                            <img src="Live.png" alt="Live"/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Project;