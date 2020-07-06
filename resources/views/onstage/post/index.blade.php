@extends('onstage.layouts.app')

@section('content')
    <div class="col-sm-8 blog-main">
        <div>
            <div id="carousel-example" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example" data-slide-to="1"></li>
                    <li data-target="#carousel-example" data-slide-to="2"></li>
                </ol><!-- Wrapper for slides -->
                <div class="carousel-inner">
                    <div class="item active">
                        <a href="{{ route('posts.show', ['post' => 41]) }}">
                            <img src="images/44287191gw1excbq6tb3rj21400migrz.jpg" alt="..." />
                            <div class="carousel-caption">男人永远不会长大，只会变老</div>
                        </a>
                    </div>
                    <div class="item">
                        <a href="{{ route('index') }}">
                            <img src="images/44287191gw1excbq5iwm6j21400min3o.jpg" alt="..." />
                            <div class="carousel-caption">欢迎来到我的博客</div>
                        </a>
                    </div>
                    <div class="item">
                        <a href="{{ route('notices.index') }}">
                            <img src="images/44287191gw1excbq4kx57j21400migs4.jpg" alt="..." />
                            <div class="carousel-caption">早上好！</div>
                        </a>
                    </div>
                </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#carousel-example" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span></a>
                <a class="right carousel-control" href="#carousel-example" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span></a>
            </div>
        </div>

        <div style="height: 20px;"></div>

        <div>
            @foreach($posts as $post)
                <div class="blog-post">
                    <h2 class="blog-post-title"><a href="/posts/{{ $post->id }}">{{ $post->title }}</a></h2>
                    <p class="blog-post-meta">{{ $post->created_at->toFormattedDateString() }} by <a
                                href="/users/{{ $post->user->id }}">{{ $post->user->name }}</a></p>
                    {!! Illuminate\Support\Str::limit($post->content, 100, '...') !!}
                    <p class="blog-post-meta">赞 {{ $post->likes_count }} | 评论 {{ $post->comments_count }}</p>
                </div>
            @endforeach

            {{ $posts->links() }}

        </div><!-- /.blog-main -->
    </div>
@endsection
