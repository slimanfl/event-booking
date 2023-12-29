import prisma from "@/utils/db";
import Link from "next/link";
import React from "react";
import DeleteForm from "./DeleteForm";

type Props = {};

const TaskList = async (props: Props) => {
  const tasks = await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const tasks1 = await prisma.task.findMany();
  console.log(tasks1);
  if (tasks1.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show!!!</h2>;
  }
  return (
    <ul className="mt-8">
      {tasks1.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? "line-through" : null
            }`}
          >
            {task.content}
          </h2>
          <div className="flex gap-6 items-center">
            <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">
              Edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
