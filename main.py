import matplotlib.pyplot as plt

# Define the size of the figure
fig, ax = plt.subplots(figsize=(10, 6))

# Set background color
fig.patch.set_facecolor('#f7f9fc')
ax.set_facecolor('#f7f9fc')

# Hide axes
ax.axis('off')

# Add subscribe title
ax.text(0.5, 0.8, 'Subscribe to Our Podcast', fontsize=24, fontweight='bold', ha='center', color='#333')

# Add description text
ax.text(0.5, 0.7, 'Stay updated with the latest episodes and exclusive content!', fontsize=16, ha='center', color='#555')

# Draw email input box
plt.gca().add_patch(plt.Rectangle((0.2, 0.5), 0.6, 0.1, edgecolor='#ccc', facecolor='white', linewidth=1.5, zorder=3))
ax.text(0.35, 0.53, 'Enter your email address', fontsize=14, color='#999', va='center')

# Draw subscribe button
plt.gca().add_patch(plt.Rectangle((0.4, 0.35), 0.2, 0.1, edgecolor='#f53d68', facecolor='#f53d68', linewidth=1.5, zorder=3))
ax.text(0.5, 0.37, 'Subscribe', fontsize=16, fontweight='bold', color='white', ha='center', va='center')

# Add decorative elements (optional)
plt.gca().add_patch(plt.Rectangle((0.15, 0.1), 0.7, 0.02, edgecolor='none', facecolor='#f53d68', zorder=1))
plt.gca().add_patch(plt.Rectangle((0.15, 0.9), 0.7, 0.02, edgecolor='none', facecolor='#f53d68', zorder=1))

# Save the figure
plt.savefig('subscribe_section.png', bbox_inches='tight')

plt.show()
