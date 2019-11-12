const indexNavBarDates = [{
		name: "标题1",
		index: 1
	},
	{
		name: "标题2",
		index: 2
	},
	{
		name: "标题3",
		index: 3
	},
	{
		name: "标题4",
		index: 4
	},
	{
		name: "标题5",
		index: 5
	},
	{
		name: "标题6",
		index: 6
	},
	{
		name: "标题7",
		index: 7
	},
	{
		name: "标题8",
		index: 8
	}

]

const topicRecommentNav = [{
		name: "默认",
		index: 0
	},
	{
		name: "最新",
		index: 1
	}
]
const userListNav = [{
		name: "互关",
		index: 0,
		num: 30
	},
	{
		name: "关注",
		index: 1,
		num: 9
	},
	{
		name: "粉丝",
		index: 2,
		num: 135
	}
]

const userSpaceNav = [{
		name: "获赞",
		index: 0,
		num: 30
	},
	{
		name: "关注",
		index: 1,
		num: 9
	},
	{
		name: "粉丝",
		index: 2,
		num: 135
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

const dongtaiGZDates = [{
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
const dongtaiHTDates = [{
		id: 0,
		imgUrl: '../../static/datapic/43.jpg',
		title: "#淘宝记录簿#",
		content: "120斤到85斤，我的反转人生",
		dynamicCount: 265,
		todayCount: 4513
	},
	{
		id: 1,
		imgUrl: '../../static/datapic/42.jpg',
		title: "#你亲身经历的灵异事件#",
		content: "走出去，才发现你跟别人差的不是一点半点",
		dynamicCount: 123,
		todayCount: 44513
	},
	{
		id: 2,
		imgUrl: '../../static/datapic/41.jpg',
		title: "#天天打卡#",
		content: "面试官:在电梯里面巧遇马云你会做什么？90后女孩的回答当场被录用",
		dynamicCount: 562,
		todayCount: 78956
	},
	{
		id: 3,
		imgUrl: '../../static/datapic/40.jpg',
		title: "#有你便是晴天#",
		content: "面试官:在电梯里面巧遇马云你会做什么？90后女孩的回答当场被录用",
		dynamicCount: 562,
		todayCount: 78956
	},
	{
		id: 4,
		imgUrl: '../../static/datapic/39.jpg',
		title: "#居安思危#",
		content: "常在河边走，哪有不湿鞋",
		dynamicCount: 562,
		todayCount: 78956
	},
	{
		id: 5,
		imgUrl: '../../static/datapic/38.jpg',
		title: "#五福临门#",
		content: "一晃之间，又老去了一岁",
		dynamicCount: 562,
		todayCount: 78956
	}
]
const paperList = [{
		userpic: "../../static/userpic/1.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/2.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	},
	{
		userpic: "../../static/userpic/3.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/4.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	},
	{
		userpic: "../../static/userpic/5.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/6.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	}, {
		userpic: "../../static/userpic/7.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/8.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	},
	{
		userpic: "../../static/userpic/9.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/10.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	},
	{
		userpic: "../../static/userpic/11.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/12.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	}, {
		userpic: "../../static/userpic/13.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/14.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	}, {
		userpic: "../../static/userpic/15.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/16.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	}, {
		userpic: "../../static/userpic/17.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/18.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	}, {
		userpic: "../../static/userpic/19.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 0
	},
	{
		userpic: "../../static/userpic/20.jpg",
		userName: "昵称",
		updateTime: "20:12",
		content: "最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容最一条消息的内容",
		noReadCount: 1
	}
]

const userList = [{
		userId: '',
		userPic: '../../static/userpic/1.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 0,
		userRelation: 0 //0 相互关注  1 关注  2 粉丝
	},
	{
		userId: '',
		userPic: '../../static/userpic/2.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 0,
		userRelation: 2 //0 相互关注  1 关注  2 粉丝
	}, {
		userId: '',
		userPic: '../../static/userpic/3.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 0,
		userRelation: 1 //0 相互关注  1 关注  2 粉丝
	},
	{
		userId: '',
		userPic: '../../static/userpic/4.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 1,
		userRelation: 1 //0 相互关注  1 关注  2 粉丝
	}, {
		userId: '',
		userPic: '../../static/userpic/5.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 1,
		userRelation: 0 //0 相互关注  1 关注  2 粉丝
	}, {
		userId: '',
		userPic: '../../static/userpic/6.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 0,
		userRelation: 2 //0 相互关注  1 关注  2 粉丝
	}, {
		userId: '',
		userPic: '../../static/userpic/7.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 1,
		userRelation: 1 //0 相互关注  1 关注  2 粉丝
	}, {
		userId: '',
		userPic: '../../static/userpic/8.jpg',
		userName: '张晓彤',
		userAge: 34,
		userSex: 1,
		userRelation: 0 //0 相互关注  1 关注  2 粉丝
	}
]
export default {
	indexNavBarDates,
	indexDatas,
	dongtaiGZDates,
	dongtaiHTDates,
	topicRecommentNav,
	paperList,
	userListNav,
	userList,
	userSpaceNav
}
