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
		type: "video", //img 图文。 video 视屏
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

const dongtaiGZDates=[
	{
		userpic: "/static/pic/userpic/1.jpg",
		username: "张孝德",
		isguanzhu: true,
		title: "六道快手家庭菜，好吃又下饭，家人都喜欢",
		type: 1, //0表示没有操作  1表示点赞
		shearNum: 20,
		commentNum: 4,
		dingNum: 57,
		sex: 1, //0:男  1:女
		age: 27,
		lcation: "广州 荔湾",
		typeInfo: {
			type: 0, //0:纯文本 1:图文 2:视屏 3:分享
	
			imgurl: "/static/datapic/1.jpg",
			content: "从男人的角度告诉你，为什么他对你有好感却不追你",
	
			playerNum: "32W",
			playerTime: "5:23"
		}
	},
	{
		userpic: "/static/pic/userpic/5.jpg",
		username: "李晓华",
		isguanzhu: false,
		title: "人人都是一本读不完的故事书",
		type: 0, //0表示没有操作  1表示点赞
		shearNum: 23,
		commentNum: 6,
		dingNum: 87,
		sex: 0, //0:男  1:女
		age: 23,
		lcation: "广州 荔湾",
		typeInfo: {
			type: 1, //0:纯文本 1:图文 2:视屏 3:分享
	
			imgurl: "/static/datapic/5.jpg",
			content: "从男人的角度告诉你，为什么他对你有好感却不追你",
	
			playerNum: "32W",
			playerTime: "5:23"
		}
	},
	{
		userpic: "/static/pic/userpic/8.jpg",
		username: "何以琳",
		isguanzhu: true,
		title: "想你的味道，是苦的",
		type: 1, //0表示没有操作  1表示点赞
		shearNum: 25,
		commentNum: 11,
		dingNum: 108,
		sex: 1, //0:男  1:女
		age: 25,
		lcation: "广州 天河",
		typeInfo: {
			type: 2, //0:纯文本 1:图文 2:视屏 3:分享
	
			imgurl: "/static/datapic/8.jpg",
			content: "一个疯狂想你的女人，才会发这四种信息(深度好文章)",
	
			playerNum: "32W",
			playerTime: "5:23"
		}
	},
	{
		userpic: "/static/pic/userpic/11.jpg",
		username: "张孝德",
		isguanzhu: false,
		title: "六道快手家庭菜，好吃又下饭，家人都喜欢",
		type: 0, //0表示没有操作  1表示点赞
		shearNum: 31,
		commentNum: 19,
		dingNum: 66,
		sex: 0, //0:男  1:女
		age: 27,
		lcation: "广州 花都",
		typeInfo: {
			type: 3, //0:纯文本 1:图文 2:视屏 3:分享
	
			imgurl: "/static/datapic/11.jpg",
			content: "从男人的角度告诉你，为什么他对你有好感却不追你",
	
			playerNum: "32W",
			playerTime: "5:23"
		}
	}
]
export default {
	indexNavBarDates,
	indexDatas,
	dongtaiGZDates
}
