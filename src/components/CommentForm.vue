<template>
    <div class="comment-form">
        <!--评论表单-->
        <form action="#" method="post" class="form-vertical" id="reply-form">
            <fieldset>
                <div class="form-group">
                    <label>评论</label>
                    <textarea class="form-control" rows="6" name="add-comment-html-code" placeholder="写点儿评论呢"></textarea>
                </div>
                <div class="form-group text-right">
                    <input type="hidden" name="itemId" value="5b87dceabf578d115d2357ac">
                    <input type="hidden" name="authorId" value="5b7d59bbbf578d05d7046ef6">
                    <img id="vCodeImage" src="../assets/validateCode.jpeg" onclick="javascript:reloadCommentVCode();" autocomplete="off">
                    <input type="text" name="vcode" id="vCodeInput" class="form-control" style="display:inline-block;width:120px;margin-right:6px;" readonly="readonly">
                    <input type="submit" class="btn btn-success pull-right" value="发表评论" id="commentSubmit" disabled="disabled">
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CommentForm"
    }
</script>

<style scoped>
  .comment-form{
      margin:20px 0 0 0;
  }
</style>