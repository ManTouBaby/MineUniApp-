const indexNavBarDates = [{
		name: "标题",
		index: 1
	},
	{
		name: "标题",
		index: 2
	},
	{
		name: "标题",
		index: 3
	},
	{
		name: "标题",
		index: 4
	},
	{
		name: "标题",
		index: 5
	},
	{
		name: "标题",
		index: 6
	},
	{
		name: "标题",
		index: 7
	},
	{
		name: "标题",
		index: 8
	}

]

const indexDatas = [{
		userpic: "/static/pic/userpic/1.jpg",
		username: "张孝德",
		isguanzhu: true,
		title: "这是一个视屏糗事",
		type: "img", //img 图文。 video 视屏
		imgurl: "/static/datapic/1.jpg",
		infonum: {
			type: 1, //0表示没有操作  1表示顶  2表示踩
			dingnum: 20,
			cainum: 4
		},
		comment: 10,
		sharenum: 15
	}, {
		userpic: "/static/pic/userpic/2.jpg",
		username: "李亦非",
		isguanzhu: false,
		title: "走出去才知道，你跟别人差得不是一点点",
		type: "video", //img 图文。 video 视屏
		imgurl: "/static/datapic/2.jpg",
		playernum: "20W",
		playertime: "2:48",
		infonum: {
			type: 2, //0表示没有操作  1表示顶  2表示踩
			dingnum: 20,
			cainum: 4
		},
		comment: 10,
		sharenum: 15
	},
	{
		userpic: "/static/pic/userpic/3.jpg",
		username: "何文敏",
		isguanzhu: false,
		title: "时间走就是走了，错过的东西也是一样不会再回来",
		type: "img", //img 图文。 video 视屏
		imgurl: "/static/datapic/3.jpg",
		playernum: "20W",
		playertime: "2:48",
		infonum: {
			type: 0, //0表示没有操作  1表示顶  2表示踩
			dingnum: 20,
			cainum: 4
		},
		comment: 10,
		sharenum: 15
	},
	{
		userpic: "/static/pic/userpic/4.jpg",
		username: "贾毅龙",
		isguanzhu: false,
		title: "",
		type: "img", //img 图文。 video 视屏
		imgurl: "/static/datapic/4.jpg",
		playernum: "20W",
		playertime: "2:48",
		infonum: {
			type: 0, //0表示没有操作  1表示顶  2表示踩
			dingnum: 20,
			cainum: 4
		},
		comment: 10,
		sharenum: 15
	},
	{
		userpic: "/static/pic/userpic/5.jpg",
		username: "赵国涛",
		isguanzhu: false,
		title: "",
		type: "video", //img 图文。 video 视屏
		imgurl: "/static/datapic/5.jpg",
		playernum: "20W",
		playertime: "2:48",
		infonum: {
			type: 0, //0表示没有操作  1表示顶  2表示踩
			dingnum: 20,
			cainum: 4
		},
		comment: 10,
		sharenum: 15
	}



]

export default {
	indexNavBarDates,
	indexDatas
}
