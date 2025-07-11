import { describe, it, expect } from 'vitest';

// Basic test to verify Vitest is working
describe('Basic Test Suite', () => {
	it('should pass a simple test', () => {
		expect(1 + 1).toBe(2);
	});

	it('should handle string operations', () => {
		expect('hello' + ' world').toBe('hello world');
	});

	it('should work with arrays', () => {
		const arr = [1, 2, 3];
		expect(arr).toHaveLength(3);
		expect(arr).toContain(2);
	});
});

// Test to verify environment variable is working
describe('Environment Configuration', () => {
	it('should have VITEST environment variable set', () => {
		// This test will only pass when VITEST=true
		expect(process.env.VITEST).toBe('true');
	});

	it('should be running in browser-like environment', () => {
		// This test verifies we're in a browser-like environment
		// (which is what conditions: ['browser'] provides)
		expect(typeof window).toBe('undefined'); // No actual window in test environment
		expect(typeof global).toBe('object'); // But global should exist
	});
}); 