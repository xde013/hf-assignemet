<template>
<div>
<!-- 	<a class="collection-item white black-text" >
		<b left-align> {{ author }} </b>
		<p>
			{{ commentDetails.content }}
			<br>
			<span class="right grey-text"></span>
		</p> 	
	</a> -->
	<li class="collection-item avatar">
      <img :src="avatar" alt="" class="circle">
      <span class="title"> <b>{{ author }} </b> </span>
      <p>
         {{ commentDetails.content }}
      </p>
      <a class="secondary-content">posted {{ commentDetails.createdAt | moment("from") }}</a>
    </li>
      <div class="divider"></div>

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
		},
		computed: {
			avatar: function () {
				return "https://api.adorable.io/avatars/150/"+ this.author +".png"
			}
		}
	}
</script>
<style type="text/css" media="screen">
	
</style>