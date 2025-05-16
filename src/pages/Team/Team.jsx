import React, { useContext, useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Card from "../../components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import Ellipse from "../../images/Ellipse";
import group from "../../images/group.svg";
import sdcTeam from "../../images/sdc-team.jpg";
import sdcTeam1 from "../../images/sdc-team1.png";
import userFallback from "../../images/user.svg";
import Row, { Col } from "../../Layout/Responsive";
import "./team.css";
import 'react-vertical-timeline-component/style.min.css';
import { TeamData } from "../../utils/team"; 


const Team = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({ color: "var(--black)" });
	}, [setHeaderStyle]);
	return (
		<main className="team">
			<TeamHero />
			<section className="team-timeline">
				<Timeline />
			</section>
		</main>
	);
};

export default Team;

const yearData = {
	2023: {
		image: sdcTeam1 || userFallback,
		description: "Team 2023"
	},
	2024: {
		image: sdcTeam || userFallback,
		description: "Expanding our vision and reach"
	},
	2025: {
		image: sdcTeam || userFallback,
		description: "Growing stronger with new talents"
	}
};

const Timeline = () => {
	const [hoveredYear, setHoveredYear] = useState(null);
	
	return (
		<VerticalTimeline>
			{Object.keys(yearData).map((year) => (
				<VerticalTimelineElement
					key={year}
					className={`vertical-timeline-element--education ${hoveredYear === year ? 'year-highlighted' : ''}`}
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date={year}
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}
					icon={<div className="year-circle">{year}</div>}
					onMouseEnter={() => setHoveredYear(year)}
					onMouseLeave={() => setHoveredYear(null)}
				>
					<YearContent year={year} data={yearData[year]} />
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
};

const YearContent = ({ year, data }) => {
	const [imageUrl, setImageUrl] = useState(data.image);
	
	const handleImageError = () => {
		console.log("Image failed to load, using fallback");
		setImageUrl(userFallback);
	};
	
	return (
		<div className="year-content">
			<h2 className="year-title">{year}</h2>
			<p className="year-description">{data.description}</p>
			<div className="team-photo-container">
				<img 
					src={imageUrl} 
					alt={`Team ${year}`} 
					className="team-group-photo" 
					onError={handleImageError}
					loading="lazy"
				/>
			</div>
		</div>
	);
};

const TeamHero = () => {
	return (
		<>
		
		<section className="team-hero">
				<Dots className="team-hero-dots" data-index="1" />
				<Dots className="team-hero-dots" data-index="2" />
				<Ellipse className='team-hero-ellipse' />
				<span className="team-circles"></span>
				<div className="team-hero-head">
				<span>Meet Our Team</span>
					<span>
						Our expert team is made up of creatives with technical
						knowhow, strategists who think outside the box and
						people who push beyond innovation.
					</span>
				</div>
				<div className="team-hero-body">
					<img src={group} alt="Group" />
            </div>
		</section>
		</>
	);
};

