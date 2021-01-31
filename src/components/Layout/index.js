import s2 from './style.module.css';
import UrlBg from '../../assets/bg3.jpg';

const Layout = ({ id, title, desc, colorBg='#C0C0C0', hideBackground = false }) => {
	const styleRootS = hideBackground ? { background: colorBg } : { background: `url(${UrlBg})`};

	return (
		<section className={ s2.root } id={id} style={styleRootS}>
			<div className={ s2.wrapper }>
				<article>
					<div className={ s2.title }>
						<h3> {title} </h3>
						<span className={ s2.separator }></span>
					</div>	
					<div className={ s2.desc + ' ' + s2.full }>
						<p>{desc}</p>
					</div>	
				</article>
			</div>
		</section>
	);
}

export default Layout;