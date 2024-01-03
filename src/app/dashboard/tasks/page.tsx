import TasksPage  from '@/app/tasks/page'

export default function Tasks() {
    <div className="flex flex-col px-8">
        <div>
            <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
            <p className="text-muted-foreground">
                Create and update your tasks
            </p>
        </div>
        <TasksPage />
    </div>
}