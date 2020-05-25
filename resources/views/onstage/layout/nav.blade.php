<div class="blog-masthead">
    <div class="container">
        <form action="/posts/search" method="GET">
            <ul class="nav navbar-nav navbar-left">
                <li>
                    <a class="blog-nav-item " href="/">首页</a>
                </li>
                <li>
                    <a class="blog-nav-item " href="/posts">文章</a>
                </li>
                <li>
                    <a class="blog-nav-item" href="/posts/create">写文章</a>
                </li>
                <li>
                    <a class="blog-nav-item" href="/notices">通知</a>
                </li>
                <li>
                    <input name="query" type="text" value="@if(!empty($query)){{$query}}@endif" class="form-control" style="margin-top:10px" placeholder="搜索词">
                </li>
                <li>
                    <button class="btn btn-default" style="margin-top:10px" type="submit" disabled>Go!</button>
                </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    @if(auth()->id())
                        <div>
                            <img src="/storage/9f0b0809fd136c389c20f949baae3957/iBkvipBCiX6cHitZSdTaXydpen5PBiul7yYCc88O.jpeg" alt="" class="img-rounded" style="border-radius:500px; height: 30px">
                            <a href="#" class="blog-nav-item dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">欢迎你，{{ auth()->user()->name }}  <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="/users/{{ auth()->id() }}">我的主页</a></li>
                                <li><a href="/users/5/setting">个人设置</a></li>
                                <li><a href="/logout">登出</a></li>
                            </ul>
                        </div>
                    @else
                        <div>
                            <a href="/register" class="blog-nav-item dropdown-toggle">去注册</a>
                            <a href="/login" class="blog-nav-item dropdown-toggle">登录</a>
                        </div>
                    @endif
                </li>
            </ul>
        </form>
    </div>
</div>