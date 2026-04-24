<x-layout>
    <h1>Student</h1>
    @foreach($students as $student)    
        <p>name:{{$student->name}}</p>
        <p>email:{{$student->email}}</p>
        <p>courses:</p>
        <ul>
            @if($student->courses->isNotEmpty())
                <span>{{$student->courses->pluck('name')->join(', ') }}</span>
            @else
                <span style="color: red">No courses</span>
            @endif
        </ul>
        <hr>
    @endforeach
</x-layout>