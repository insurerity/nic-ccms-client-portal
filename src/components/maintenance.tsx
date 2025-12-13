import Logo from "./common/Logo";

interface MaintenanceUIAdvancedProps {
  title?: string;
  description?: string;
  estimatedTime?: string;
  status?: "maintenance" | "update" | "issue";
  showProgress?: boolean;
}

export function MaintenanceUIAdvanced({
  title = "We'll be back soon",
  description = "We're currently performing scheduled maintenance to bring you a better experience.",
  estimatedTime = "in a few hours",
  status = "maintenance",
  showProgress = false,
}: MaintenanceUIAdvancedProps) {


  const getStatusMessage = () => {
    switch (status) {
      case "update":
        return "Deploying updates";
      case "issue":
        return "Investigating issue";
      default:
        return "Performing maintenance";
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="flex flex-col items-center justify-center px-6 py-12 max-w-2xl text-center">
        {/* Icon */}
        <div className="mb-8 flex items-center justify-center  rounded-full bg-muted">
          {" "}
               <Logo />
        </div>{" "}
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          {title}
        </h1>{" "}
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
          {description}
        </p>{" "}
        {/* Progress Bar */}
        {showProgress && (
          <div className="w-full max-w-xs mb-8">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full animate-pulse"
                style={{ width: "65%" }}
              />
            </div>
          </div>
        )}{" "}
        {/* Status */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-muted border border-border">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            {getStatusMessage()} — Expected Soon
          </span>
        </div>{" "}
        {/* Footer */}
        <p className="mt-12 text-sm text-muted-foreground">
          Thank you for your patience
        </p>
      </div>
    </div>
  );
}



