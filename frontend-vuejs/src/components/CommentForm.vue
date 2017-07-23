<template>
	<div class="row">
	<form class="col s12 white hoverable myform" >
		<div class="row">
			<!--  <div class="col s12 center-align" v-show="loading"> <h6> Loading... </h6></div> -->
			<div class="col s12">
				<form action="" method="post" accept-charset="utf-8" @submit.prevent="submitComment()" class="white">
				<h5 class="grey-text center-align">Share your opinion</h5>
					<div class="input-field col s12 white ">
						<i class="material-icons prefix">mode_edit</i>
						<textarea id="topic" class="materialize-textarea" v-model="content" data-length="120" required></textarea>
						<label for="topic" data-error="wrong" data-success="right" > Your comment </label>
					</div>
					<div class="col s12 right-align">
						<button :disabled="loading" class="btn waves-effect waves-light black" type="submit" name="action" >Comment
						<i class="material-icons right">send</i>
						</button>
					</div>
				</form>
			</div>
			
		</div>
	</form>
</div>
</template>

<script>
	export default {
		name: 'comment-form',

		props: ['topic'],

		data() {
			return {
				loading: false,
				content: ''
			}
		},

		methods: {
			submitComment: function() {
				let comment = {
					content: this.content,
					by: 1 // TODO assign current user id
				}
				// POST request to comments
				this.loading = true;
				
				this.$resource('http://localhost:1337/news/'+this.topic.id+'/comments').save(comment).then(response => {
					console.log(response.data);
					this.$emit('commented', response.data); // trigger the update method in the parent
					this.content = '';
					this.loading = false;
				}, response => {
					// error callback
				})
			}
		}
	}
</script>

<style>
	form {
		padding: 5%;
	}	
</style>