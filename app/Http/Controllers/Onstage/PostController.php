<?php

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Like;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //  文章列表页面
    public function index()
    {
        $posts = Post::query()
            ->where('status', 1)
            ->with('user')
            ->withCount(['comments', 'likes'])
            ->latest()
            ->paginate(6);

        return view('onstage.post.index', compact('posts'));
    }

    //  文章详情
    public function show(Post $post)
    {
        $post->load('comments');

        return view('onstage.post.show', compact('post'));
    }

    //  创建文章
    public function create()
    {
        return view('onstage.post.create');
    }

    //  创建逻辑
    public function store()
    {
        $this->validate(request(), [
            'title' => 'required|max:255|min:4',
            'content' => 'required|min:10',
        ]);

        $params = array_merge(request(['title', 'content']), ['user_id' => auth()->id()]);

        Post::query()->create($params);

        return redirect()->route('posts.index');
    }

    //  编辑逻辑
    public function edit(Post $post)
    {
        return view('onstage.post.edit', compact('post'));
    }

    public function update(Post $post)
    {
        //  验证
        $this->validate(request(), [
            'title' => 'required|max:255|min:4',
            'content' => 'required|min:20',
        ]);

        $this->authorize('update', $post);

        //  逻辑
        $post->title = request('title');
        $post->content = request('content');
        $post->save();

        //  渲染
        return redirect()->route('posts.show', compact('post'));
    }

    //  删除逻辑
    public function delete(Post $post)
    {
        $this->authorize('delete', $post);

        $post->delete();

        return redirect()->route('posts.index');
    }

    public function imageUpload(Request $request)
    {
        $path = $request->file('wangEditorH5File')->storePublicly(md5(time()));

        return asset('storage/' . $path);
    }

    /*
     * 文章评论保存
     */
    public function comment(Post $post)
    {
        $this->validate(request(), [
            'post_id' => 'required|exists:posts,id',
            'content' => 'required|min:2',
        ]);

        $comment = new Comment();
        $comment->user_id = auth()->id();
        $comment->content = request('content');
        $post->comments()->save($comment);

        return back();
    }

    public function like(Post $post)
    {
        Like::query()->firstOrCreate([
            'user_id' => auth()->id(),
            'post_id' => $post->id,
        ]);

        return back();
    }

    public function cancelLike(Post $post)
    {
        $post->like(auth()->id())->delete();

        return back();
    }

    /*
     * 搜索页面
     */
    public function search()
    {
        $this->validate(request(), [
            'query' => 'required'
        ]);

        $query = request('query');

        $posts = Post::query()->search($query)->paginate(5);

        return view('onstage.post.search', compact('posts', 'query'));
    }
}
