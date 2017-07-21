<!-- Topic Detailed view  -->
<template>
<div>
<!--  not too short spinner -->
	<div  v-if="loading" class="center-align">
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

<div class="row ">
 <!-- Concerned topic referred as item -->
<topic :topic="item"></topic>
<!--  Comment form component -->
<comment-form :topic="topic" v-on:commented="updateComments()"></comment-form>

<div class="col s12 ">
	<ul class="collection with-header white ">
		<li class="collapsible-header"> <h5> {{ numComs }} {{ numComs | pluralize('comment') }} </h5></li>
		<!-- Comments list -->
		<comment v-for="(comment,key) in comments" :comment="comment" :key="comment.id"></comment>
	</ul>
</div>
</div>
</div>
</template>
<script>
	import Topic from './Topic.vue'
	import Comment from './Comment.vue'
	import CommentForm from './CommentForm.vue'

	export default {
		name: 'topic-detail',

		data() {
			return {
				loading: true,
				comments: [],
				topic: [],
			}
		},

		components: {
			Topic,
			Comment,
			CommentForm
		},

		methods: {
			fetchTopic: function () {
				this.$http.get('http://localhost:1337/News/' + this.$route.params.id ).then(response => {
					this.topic = response.body;
					this.comments = response.body['comments'];
					this.loading = false;
				});
			},

			updateComments: function (comment) {
		        this.comments.push(comment);
		     } 
		},
		created() {
			this.loading = true;
			this.fetchTopic()
		},
		watch: {
			'$route': 'fetchTopic'
		},
		computed: {
			numComs: function() {
				return this.comments.length > 0 ? this.comments.length : "No";
			},
			item: function() {
				return this.topic;
			}
		}
	}
</script>
<style type="text/css" media="screen">
	
</style>