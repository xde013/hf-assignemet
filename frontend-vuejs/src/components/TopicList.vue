<template>

<div>
	<div  v-if="load"  class="center-align">
		<div class="preloader-wrapper big active">
			<div class="spinner-layer spinner-blue-only">
				<div class="circle-clipper left">
					<div class="circle"></div>
				</div><div class="gap-patch">
				<div class="circle"></div>
			</div><div class="circle-clipper right">
			<div class="circle"></div>
		</div>
	</div>
</div>
</div>
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
				topics: [],
				loading: Boolean
			};
		},
		methods: {
			// GET /news
			fetchTopics: function() {
				
				this.$http.get('http://localhost:1337/News').then(response => {
					this.topics = response.body;	
					this.loading = false;				
				});
			}
		},
		created() {
			this.loading = true;
			// fetch the topics when the component is mounted
			this.fetchTopics();

			
			// var self = this;
			//  $.getJSON('http://localhost:1337/News', function(data, textStatus) {
					//    		var topics = data;
					//    		console.log(data);
					//    		console.log(topics);
					//    		self.topics = topics
			//  });
		},
		computed: {
			load: function() {
				return this.loading ? true : false;
			}
		}
	}
</script>
<style type="text/css" media="screen">
	
</style>