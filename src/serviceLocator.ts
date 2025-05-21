export class ServiceLocator {
	private static instance: ServiceLocator;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	private services: Map<string, any> = new Map();

	private constructor() {}

	public static getInstance(): ServiceLocator {
		if (!ServiceLocator.instance) {
			ServiceLocator.instance = new ServiceLocator();
		}
		return ServiceLocator.instance;
	}

	public registerService<T>(name: string, service: T): void {
		this.services.set(name, service);
	}

	public getService<T>(name: string): T {
		return this.services.get(name);
	}
}
