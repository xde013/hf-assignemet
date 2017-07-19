<template>
	<div>
		<topic v-for="(topic, key) in topics" :topic="topic" key="topic.id"></topic>
	</div>
</template>

<script>
	import Topic from './Topic.vue';
	import TopicDetail from './TopicDetail.vue';


	export default {

		name: 'topic-list',
		components: {
			Topic,
			TopicDetail
		},

		data() {
			return {
				topics: []
			};
		},

		methods: {
			// GET /news
			fetchTopics: function() {
				this.$http.get('http://localhost:1337/News').then(response => {
					this.topics = response.body;
				});
			}
		},

		mounted() {
			// fetch the topics when the component is mounted
			this.fetchTopics();
			
			// var self = this;
			//  $.getJSON('http://localhost:1337/News', function(data, textStatus) {
			//    		var topics = data;
			//    		console.log(data);
			//    		console.log(topics);
			//    		self.topics = topics
			//  });
		}
	}
</script>

<style type="text/css" media="screen">
	
</style>