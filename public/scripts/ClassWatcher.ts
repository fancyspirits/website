export class ClassWatcher {
    observer: MutationObserver | null;
    lastClassState: boolean;

    constructor(private targetNode: HTMLElement, private classToWatch: string, private onRemove: () => void) {
        this.observer = null;
        this.lastClassState = targetNode.classList.contains(this.classToWatch);

        this.init();
    }

    init() {
        this.observer = new MutationObserver(this.mutationCallback.bind(this));
        this.observe();
    }

    observe() {
        this.observer?.observe(this.targetNode, { attributes: true });
    }

    disconnect() {
        this.observer?.disconnect();
    }

    mutationCallback(mutationsList: MutationRecord[]) {
        mutationsList.forEach(mutation => {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                const currentClassState = (mutation.target as HTMLElement).classList.contains(this.classToWatch);
                if (this.lastClassState !== currentClassState) {
                    this.lastClassState = currentClassState;
                    if (!currentClassState) {
                        this.onRemove();
                    }
                }
            }
        })
    }
}