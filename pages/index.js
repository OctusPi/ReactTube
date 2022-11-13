import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

const StyleHeader = styled.div`
	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.user-info{
		display:flex;
		align-items:center;
		width:100%;
		padding:16px 32px;
		gap:16px;
		margin-top:50px
	}
`;

function Header()
{

return (
	<StyleHeader>
		<section className="user-info">
			{/* <img src={config.baner} /> */}
			<img src={config.photo} />
			<div>
				<h2>{config.name}</h2>
				<p>{config.job}</p>
			</div>
		</section>
	</StyleHeader>
)
}

function Timeline(props)
{
	const playlistsNames = Object.keys(props.playlists);
	return (
		<StyledTimeline>
			{
				playlistsNames.map(playlistName => {
					const videos = props.playlists[playlistName];

					return (
						<section>
							<h2>{playlistName}</h2>
							<div>
								{videos.map((video) => {
								return (
									<a href={video.url}>
										<img src={video.thumb} />
										<span>{video.title}</span>
									</a>
								);
								})}
							</div>
						</section>
					);
				})
			}	
		</StyledTimeline>
	)
	
}

function HomePage()
{
    return (
	<>
		<CSSReset/>
		<div>
		<Menu></Menu>
        <Header></Header>
        <Timeline playlists={config.playlists}></Timeline>
    	</div>
	</>
    )
}
  
export default HomePage;