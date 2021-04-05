module.exports = {
  posts: [
      { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
      { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
  ],
  users: [
      { id: 123, name: "John Doe" },
      { id: 456, name: "Jane Doe" }
  ],
  comments: [
      { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
      { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
  ],
  links:[
      { id:1,title:"กรท.",main:"แผนกสารสนเทศ",catory:"การบริการ",tech:"web",url:"www.krt.com"},
      { id:2,title:"helping.",main:"แผนกสารสนเทศ",catory:"การบริการ",tech:"web",url:"pea.helping.com"},
      { id:3,title:"dmxs.",main:"แผนกสารสนเทศ",catory:"การบริการ",tech:"web",url:"pea.dmxs.com"},
      { id:4,title:"box.",main:"แผนกสารสนเทศ",catory:"การบริการ",tech:"web",url:"pea.box.co.th"},
  ]
}