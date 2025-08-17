import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Target, Lightbulb, Cog, TrendingUp } from "lucide-react";

interface Project {
  title: string;
  client: string;
  description: string;
  impact: string[];
  technologies: string[];
  type: string;
  status: string;
  problem?: string;
  solution?: string;
  metrics?: string[];
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  if (!project) return null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-secondary text-secondary-foreground border-border';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'enterprise': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'client project': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      default: return 'bg-secondary text-secondary-foreground border-border';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl text-foreground">{project.title}</DialogTitle>
              <p className="text-primary font-medium mt-1">{project.client}</p>
            </div>
            <div className="flex gap-2">
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
              <Badge className={getTypeColor(project.type)}>
                {project.type}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overview */}
          <Card>
            <CardContent className="p-4">
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </CardContent>
          </Card>

          {/* Problem & Solution */}
          {(project.problem || project.solution) && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.problem && (
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-red-400" />
                      <h3 className="font-semibold text-foreground">Problem</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                  </CardContent>
                </Card>
              )}

              {project.solution && (
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      <h3 className="font-semibold text-foreground">Solution</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Technologies */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Cog className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-foreground">Technologies Used</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-tech-badge border-tech-badge-border text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Business Impact */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Business Impact</h3>
              </div>
              <div className="space-y-1">
                {project.impact.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              {project.metrics && (
                <div className="mt-4 space-y-1">
                  <h4 className="font-medium text-foreground text-sm mb-2">Key Metrics</h4>
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;