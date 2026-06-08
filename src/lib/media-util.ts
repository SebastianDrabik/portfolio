const data = {
	title: "Sebastian Drabik",
	description: "Sebastian Drabik • Software Engineer",
	url: "https://sebastiandrabik.dev/",
	img: "/icon/android-chrome-512x512.png",
};

export const richMedia = [
	{
		name: "og:title",
		content: data.title,
	},
	{
		name: "twitter:title",
		content: data.title,
	},
	{
		name: "og:url",
		content: data.url,
	},
	{
		name: "twitter:url",
		content: data.url,
	},
	{
		name: "og:description",
		content: data.description,
	},
	{
		name: "twitter:description",
		content: data.description,
	},
	{
		name: "og:image",
		content: data.img,
	},
	{
		name: "twitter:image",
		content: data.img,
	},
];
