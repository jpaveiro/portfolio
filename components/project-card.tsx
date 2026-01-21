'use client';
import { 
  Dialog, 
  DialogClose, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Mail, X } from 'lucide-react';
import { Iam } from '@/components/types/iam';
import { GithubIcon } from "@/components/ui/icon";

interface Project {
  title: string;
  tags: string[];
  desc: string;
  link: string;
}

interface Props {
  project: Project;
  iam: Iam;
}

export default function ProjectCard({ project, iam }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer bg-gradient-to-br from-gray-900/90 to-black/50 border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-2xl">
        <CardHeader className="p-8 pb-6">
          <div className="flex justify-between items-center mb-4 gap-4">
            <CardTitle className="text-white group-hover:text-blue-400 text-xl flex-1">
              {project.title}
            </CardTitle>
            <ExternalLink className="text-gray-500 group-hover:text-white h-6 w-6 shrink-0" />
          *</div>
          
          <CardDescription className="text-gray-400 mb-4">
            {project.desc}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gradient-to-b from-gray-900 to-black border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-300 mb-6">
            {project.desc}
          </DialogDescription>
        </DialogHeader>

        <Button asChild className="bg-transparent hover:bg-transparent absolute top-4 right-6 h-8 w-8 p-0">
          <DialogClose>
            <X className="h-4 w-4" />
          </DialogClose>
        </Button>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button asChild variant="outline" size="sm">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              Repositório
            </a>
          </Button>
          <Button asChild variant="default" size="sm">
            <a href={`mailto:${iam.email}?subject=Projeto ${project.title}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contatar
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
