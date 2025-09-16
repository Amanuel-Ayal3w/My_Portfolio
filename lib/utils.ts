import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  if (dateString.toLowerCase() === 'present') {
    return 'Present';
  }

  // Handle various date formats
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return dateString; // Return original if parsing fails
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

export function getExperienceDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = endDate.toLowerCase() === 'present' ? new Date() : new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return `${startDate} - ${endDate}`;
  }

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  }

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  let duration = `${years} year${years > 1 ? 's' : ''}`;
  if (months > 0) {
    duration += ` ${months} month${months > 1 ? 's' : ''}`;
  }

  return duration;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}