<template>
<div >
	<a  class="collection-item white black-text" >
		<b left-align> {{ author }} </b>
		<p>
			{{ commentDetails.content }}
			<br>
			<span class="right grey-text">posted {{ commentDetails.createdAt | moment("from") }}</span>
		</p> 	
	</a>
</div>
</template>
<script>
	export default {
		name: 'comment',
		props: {
			comment: Object
		},
		data() {
			return {
				commentDetails: [],
				author: null
			};
		},
		methods: {
			fetchComment: function () {
				this.$http.get('http://localhost:1337/comments/' + this.comment.id).then(response => {
					this.commentDetails = response.body;
					this.author = response.body.by.name;
				})
			}
		},
		created() {
			this.fetchComment();
		}
	}
</script>
<style type="text/css" media="screen">
	
</style>